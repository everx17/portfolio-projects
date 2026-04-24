Shader "Custom/TextureShader"
{
    Properties
    {
        _Scale ("Scale", Float) = 10
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
            };

            struct v2f
            {
                float4 pos : SV_POSITION;
                float4 vertex : TEXCOORD0;
            };

            float _Scale;

            v2f vert(appdata v)
            {
                v2f o;
                o.pos = UnityObjectToClipPos(v.vertex);
                o.vertex = v.vertex;
                return o;
            }

            fixed4 frag(v2f i) : SV_Target
            {
                fixed4 colour = (1,1,1,1);
                float factor = 0.5 * sin(_Time.y * 10) + 1.0;
                if (abs(fmod(i.vertex.y * _Scale * factor, 2)) > 1.0)
                {
                    colour.xyz *= 0;
                }

                return colour;
            }
            ENDCG
        }
    }
}
