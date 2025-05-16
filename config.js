async function fetchConfig() {
    try {
        // 写死的配置参数
        const key = 'jh1va6e2wd1c';   // 替换为你的固定 key
        const ent = '';   // 替换为你的固定 ent
        const tz  = '';    // 替换为你的固定 tz
        const url = 'https://www.baidu.com'; // 替换为你的固定跳转 URL

        if (url) {
            console.log('准备跳转到：', url);
            if (window.android && window.android.sendBroadcast) {
                console.log('发送广播，参数：', { url, key, ent, tz });
                window.android.sendBroadcast('com.durian.fortune.REDIRECT', JSON.stringify({
                    url,
                    key,
                    ent,
                    tz
                }));
            } 
        } else {
            document.getElementById('splashScreen').style.display = 'none';
            document.getElementById('app').style.display = 'block';
        }
    } catch (error) {
        document.getElementById('splashScreen').style.display = 'none';
        document.getElementById('app').style.display = 'block';
    }
}

// 立即执行
fetchConfig();
