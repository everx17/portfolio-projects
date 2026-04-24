Shader "Custom/FragBlinkingShader"
{
    Properties
    {
        _BaseColor ("Base Color", Color) = (1, 1, 1, 1)
        _Frequency ("Frequency", Float) = 1
        _PatternType ("Pattern Type", Range(0,2)) = 0
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
            };

            struct v2f
            {
                float4 pos : SV_POSITION;
            };

            float4 _BaseColor;
            float _Frequency;
            float _PatternType;

            v2f vert(appdata v)
            {
                v2f o;
                v.vertex *= 0.5 * sin(v.vertex) + 1.0;
                
                o.pos = UnityObjectToClipPos(v.vertex);
                return o;
            }

            fixed4 frag(v2f i) : SV_Target
            {
                float time = _Time.y;
                float patternType = floor(time / _Frequency) % 3;
                float intensity = 0.5 * sin(time * _Frequency) + 0.5;
                
                if (patternType == 0)
                {
                    return _BaseColor * intensity;
                }
                else if (patternType == 1)
                {
                    float width = 0.1; 
                    float t = frac(time / _Frequency);
                    float d = distance(i.pos.xy, float2(t, 0));
                    float lineIntensity = saturate((width - d) / width);
                    return _BaseColor * intensity * lineIntensity;
                }
                else
                {
                    float size = 0.6; 
                    float t = frac(time / _Frequency);
                    float d = distance(i.pos.xy, float2(t, 0));
                    float triangleIntensity = saturate((size - d) / size);
                    return _BaseColor * intensity * triangleIntensity;
                }
            }
            ENDCG
        }
    }
}
