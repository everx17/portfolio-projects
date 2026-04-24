Shader "Custom/NormalExtrusionShader"
{
    Properties
    {
        _BaseColor("Base Color", Color) = (0, 0, 0, 1)
        _Factor("Factor", Range(0,5)) = 1
    }

    SubShader
    {
        Tags { "RenderType" = "Opaque" }

        Pass
        {
            Cull Front

            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag

            #include "UnityCG.cginc"

            struct appdata
            {
                float4 vertex : POSITION;
                float3 normal : NORMAL;
            };

            struct v2f
            {
                float4 pos : SV_POSITION;
            };

            float4 _BaseColor : COLOR;
            float _Factor;

            v2f vert(appdata v)
            {
                v2f o;

                v.vertex.xyz += v.normal * _Factor;
                
                o.pos = UnityObjectToClipPos(v.vertex);
                return o;
            }

            fixed4 frag(v2f i) : SV_TARGET
            {
                return _BaseColor;
            }
            ENDCG
        }
    }
}
