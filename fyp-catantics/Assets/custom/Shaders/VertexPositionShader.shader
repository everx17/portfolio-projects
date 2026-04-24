Shader "Custom/VertexPositionShader"
{
    Properties
    {
        _BaseColor ("Base Color", Color) = (1, 1, 1, 1)
        _MainTex ("Texture", 2D) = "white" {} 
    }
    
    SubShader
    {
        Tags { "RenderType" = "Opaque" }

        Pass
        {
            CGPROGRAM
            #pragma vertex vert 
            #pragma fragment frag

            #include "UnityCG.cginc"

            struct appdata
            {
                float4 vertex : POSITION;
                float2 uv : TEXCOORD0; 
            };

            struct v2f
            {
                float2 uv : TEXCOORD0; 
                float4 pos : SV_POSITION;
            };

            float4 _BaseColor;
            sampler2D _MainTex; 

            v2f vert(appdata v)
            {
                v2f o;
                v.vertex *= 0.5 * sin(v.vertex) + 1.0;
                o.pos = UnityObjectToClipPos(v.vertex);
                o.uv = v.uv; 
                return o;
            }

            half4 frag(v2f i) : SV_Target
            {
                half4 texColor = tex2D(_MainTex, i.uv); 
                return texColor * _BaseColor; 
            }
            ENDCG
        }
    }
}
