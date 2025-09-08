let kakaoLoaded = false;

export function loadKakaoSDK(appKey) {
    return new Promise((resolve) => {
        if (window.Kakao) {
            if (!window.Kakao.isInitialized && appKey) {
                window.Kakao.init(appKey);
            }
            resolve(window.Kakao);
            return;
        }

        if (kakaoLoaded) {
            resolve(window.Kakao);
            return;
        }

        const script = document.createElement("script");
        script.src = "https://developers.kakao.com/sdk/js/kakao.js";
        script.async = true;
        script.onload = () => {
            window.Kakao.init(appKey);
            kakaoLoaded = true;
            resolve(window.Kakao);
        };
        document.head.appendChild(script);
    });
}
