Shader "Custom/NoiseShader"
{
    Properties
    {
        _MainTex("Texture", 2D) = "white" {}
        _NoiseTex("Noise", 2D) = "white" {}
        _Frequency("Frequency", float) = 1
        _BorderWidth("Border Width", float) = 0.1
        _BorderColor("Border Color", Color) = (1, 0, 0, 1)
    }

    SubShader
    {
        Tags { "Queue" = "Transparent" "RenderType" = "Transparent" }
        ZWrite Off
        Blend SrcAlpha OneMinusSrcAlpha
        LOD 100

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

            sampler2D _MainTex; 
            sampler2D _NoiseTex; 
            float _Frequency; 
            float _BorderWidth;
            float4 _BorderColor;

            v2f vert(appdata IN)
            {
                v2f OUT;
                OUT.pos = UnityObjectToClipPos(IN.vertex);
                OUT.uv = IN.uv;
                return OUT;
            }

            fixed4 frag(v2f IN) : SV_Target
            {
                fixed4 col = tex2D(_MainTex, IN.uv);
                fixed4 noise = tex2D(_NoiseTex, IN.uv);

                float alpha = 1;
                float threshold = (sin(_Frequency * _Time.w) + 1) / 2.0;

                if (noise.r < threshold - _BorderWidth) alpha = 0;
                if (noise.r < threshold) col = _BorderColor;

                return fixed4(col.rgb, alpha);
            }
            ENDCG
        }
    }
    FallBack "Transparent/Diffuse"
}
