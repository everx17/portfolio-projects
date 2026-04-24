Shader "Custom/DotsAnimate"
{
    Properties
    {
        _Width("Width", Float) = 100
        _Height("Height", Float) = 100
        _Segment("Segment", Float) = 10
        _Radius("_Radius", Float) = 5
        _Color("Color", Color) = (1, 1, 1, 1)
        _Speed("Speed", Float) = 1.0
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
                float4 pos : SV_POSITION;
                float2 uv : TEXCOORD0;
            };

            float _Width;
            float _Height;
            float _Segment;
            float _Radius;
            float4 _Color;
            float _Speed;

            v2f vert(appdata IN)
            {
                v2f OUT;
                OUT.pos = UnityObjectToClipPos(IN.vertex);
                OUT.uv = IN.uv;
                return OUT;
            }

            fixed4 frag(v2f IN) : SV_Target
            {
                float textureX = IN.uv.x * _Width;
                float textureY = IN.uv.y * _Height;

                float2 center = float2(int(textureX / _Segment) * _Segment + _Segment / 2.0, int(textureY / _Segment) * _Segment + _Segment / 2.0);

                float freq = 10.0;
                float radiusFactor = 0.5 * sin(freq * _Time.y * _Speed) + 1.0;
                float firstFactor = pow(textureX - center.x, 2);
                float secondFactor = pow(textureY - center.y, 2);
                float thirdFactor = pow(_Radius * radiusFactor, 2);

                fixed4 colour = fixed4(_Color.rgb, 1);

                if (firstFactor + secondFactor < thirdFactor)
                {
                    colour.xyz *= 0;
                }

                return colour;
            }
            ENDCG
        }
    }
}
