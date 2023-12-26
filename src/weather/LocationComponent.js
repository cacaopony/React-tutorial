import { useEffect, useState } from "react";
import WeatherComponent from "./WeatherComponent";

export default function LocationComponent() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState(""); // エラーメッセージ用の状態     

    useEffect(() => {
        // 成功した時の関数
        function successFunc(position) {
            setLatitude(position.coords.latitude);

            setLongitude(position.coords.longitude);
        }

        function errorFunc(error) {
            // エラーコードのメッセージを定義
            var errorMessage = {
                0: "原因不明のエラーが発生しました…。",
                1: "位置情報の取得が許可されませんでした…。",
                2: "電波状況などで位置情報が取得できませんでした…。",
                3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。",
            };

            // エラーコードに合わせたエラー内容をアラート表示
            alert(errorMessage[error.code]);
        }

        // 現在位置を取得する
        navigator.geolocation.getCurrentPosition(successFunc, errorFunc);
    }, []);

    return (
        <div>
            <h1>現在の位置情報</h1>
            {error ? (
                <p>エラー: {error}</p>
            ) : (
                <>
                    <div>緯度：{latitude}</div>
                    <div>経度：{longitude}</div>
                    <WeatherComponent latitude={latitude} longitude={longitude}></WeatherComponent>
                </>
            )}
        </div>
    );
}