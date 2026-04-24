Shader "Custom/NormalMappedShader"
{
    Properties
    {
        _MainTex ("Texture", 2D) = "white" {}
        _NormalTex ("NormalMap", 2D) = "bump" {}
    }

    SubShader
    {
        Tags { "RenderType"="Opaque" }
        
        Pass
        {
            CGPROGRAM
            #pragma vertex vert 
            #pragma fragment frag

            #include "UnityCG.cginc"

            struct appdata
            {
                float4 vertex : POSITION;
                float3 normal : NORMAL;
                float4 tangent : TANGENT;
                float2 uv : TEXCOORD0;
            };

            struct v2f
            {
                float2 uv : TEXCOORD0;
                float3 worldPos : TEXCOORD1;
                float3 worldNormal : TEXCOORD2;
                float3 worldTangent : TEXCOORD3;
                float3 worldBitangent : TEXCOORD4;
                float4 pos : SV_POSITION;
            };

            sampler2D _MainTex;
            sampler2D _NormalTex;

            v2f vert(appdata v)
            {
                v2f o;
                o.pos = UnityObjectToClipPos(v.vertex);
                o.worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
                o.worldNormal = UnityObjectToWorldNormal(v.normal);
                o.worldTangent = UnityObjectToWorldDir(v.tangent.xyz);
                o.worldBitangent = cross(o.worldNormal, o.worldTangent) * v.tangent.w;
                o.uv = v.uv;
                return o;
            }

            fixed4 frag(v2f i) : SV_Target
            {
                fixed4 col = tex2D(_MainTex, i.uv);
                float3 normalTex = UnpackNormal(tex2D(_NormalTex, i.uv));
                float3 normal = normalize(normalTex.x * i.worldTangent + normalTex.y * i.worldBitangent + normalTex.z * i.worldNormal);

                fixed3 lightDir = normalize(_WorldSpaceLightPos0.xyz - i.worldPos);
                fixed nl = max(0.0, dot(normal, lightDir));
                fixed4 diffuse = fixed4(nl * _LightColor0.rgb, 1.0);

                return col * diffuse;
            }
            ENDCG
        }
    } 
    FallBack "Diffuse"
}
