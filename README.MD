# Markdown-Editor
![ㅓㅘ](https://user-images.githubusercontent.com/86773756/198895024-aed7f307-aeb3-4fbb-9e91-a5477091138b.gif)

```html
<!DOCTYPE html>
<html lang="ko">
    
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
    <link rel="stylesheet" href="./styles.css">
    <script src='FontAwesome CDN'></script>
    
    <title>마크다운</title>
</head>
    
<body>
    <div class="container"><!--  Container는 단지 가운데 정렬을 하기 위함 -->
        <div id="Editor-container"></div> <!-- 모든건 Editor-container 안에서 생성 -->
    </div>
    
    <div id="preview"><h3>미리보기</h3></div>
    
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script src="./markdown.js"></script>
</body>
</html>
```
