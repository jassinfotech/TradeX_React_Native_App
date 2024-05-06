import React from 'react';
import { WebView } from 'react-native-webview';

const TradingViewChart = ({ themeMode }) => {
  console.log("themeMode", themeMode)
  const htmlContent = `
    <html>
      <head>
        <style>
          body {
            margin: 0; 
            padding: 0;
            background-color: ${!themeMode ? '#000000' : '#ffffff'};
            color: ${!themeMode ? '#ffffff' : '#000000'};
          }
          .tradingview-widget-container {
            border: none !important; 
          }
        </style>
        <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
      </head>
      <body>
        <div class="tradingview-widget-container">
          <div id="tradingview_123456789"></div>
        </div>
        <script type="text/javascript">
          new TradingView.widget({
            "width": 980,
            "height": 620,
            "symbol": "BINANCE:BTCUSDT",
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "${!themeMode ? 'dark' : 'light'}", 
            "style": "1",
            "locale": "en",
            "toolbar_bg": "${!themeMode ? '#1a1a1a' : '#f1f3f6'}",
            "enable_publishing": false,
            "hide_top_toolbar": true,
            "container_id": "tradingview_123456789"
          });
        </script>
      </body>
    </html>
  `;

  return (
    <WebView
      originWhitelist={['*']}
      source={{ html: htmlContent }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      mixedContentMode="always"
      style={{ flex: 1 }} 
    />
  );
};

export default TradingViewChart;
