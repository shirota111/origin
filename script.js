document.addEventListener('DOMContentLoaded', function() {
    const bookContainer = document.getElementById('book-container');

    const links = [
        { text: 'To DO LIST', href: 'https://shirota111.github.io/todolist/todo.html' },
        { text: 'github', href: 'https://github.com/shirota111' },
        { text: 'CHATGPT', href: 'https://chatgpt.com/g/g-PGPnMa4Ph-ri-ben-yu-rokuin' },
        { text: 'twitter', href: 'https://x.com/nikothewall/status/1808267371725181330' },
        { text: '座標', href: 'http://shirota111.github.io/coordinate/coordinate.html' },
        { text: 'リンク6', href: 'https://example.com/6' },
        { text: 'リンク7', href: 'https://example.com/7' },
        { text: 'リンク8', href: 'https://example.com/8' },
        { text: 'リンク9', href: 'https://example.com/9' },
        { text: 'リンク10', href: 'https://example.com/10' },
    ];

    for (let i = 0; i < 5; i++) {
        // 各リンクを包む要素の作成
        const bookWrap = document.createElement('div');
        bookWrap.className = 'book-wrap';

        // チェックボックスの作成
        const bookInput = document.createElement('input');
        bookInput.id = 'book-simple-open-' + i;
        bookInput.type = 'checkbox';
        bookInput.name = 'book-simple-switch';
        bookInput.value = 'action';

        // リンク情報を表示する要素の作成
        const bookSimple = document.createElement('div');
        bookSimple.className = 'book-simple';
        bookSimple.id = 'book-simple-contents-' + i;

        // リンク情報を包む要素の作成
        const bookInbox = document.createElement('div');
        bookInbox.className = 'book-inbox';

        // リンク情報のリストの作成
        const bookList = document.createElement('ul');

        // リストアイテム1の作成（リンク）
        const bookItem1 = document.createElement('li');
        const bookLink = document.createElement('a');
        bookLink.href = links[i].href;  // 各リンクに個別のURLを設定
        bookLink.textContent = links[i].text;
        bookItem1.appendChild(bookLink);
        bookItem1.append('←🐇'); // 矢印とウサギの絵文字を追加

        // リストアイテム2の作成（アイコン）
        const bookItem2 = document.createElement('li');
        bookItem2.textContent = '📕'; // 本のアイコン

        // リストアイテム3の作成（アイコン）
        const bookItem3 = document.createElement('li');
        bookItem3.textContent = '🐓'; // ニワトリのアイコン

        // リストにアイテムを追加
        bookList.appendChild(bookItem1);
        bookList.appendChild(bookItem2);
        bookList.appendChild(bookItem3);

        // リストを包む要素にリストを追加
        bookInbox.appendChild(bookList);
        bookSimple.appendChild(bookInbox);

        // ラベルの作成
        const bookLabel = document.createElement('label');
        bookLabel.className = 'book-simple-switch';
        bookLabel.htmlFor = 'book-simple-open-' + i;
        bookLabel.setAttribute('data-book-simple-open', '開く');
        bookLabel.setAttribute('data-book-simple-shut', '閉じる');
        bookLabel.textContent = '本を';

        // 各要素をbookWrapに追加
        bookWrap.appendChild(bookInput);
        bookWrap.appendChild(bookSimple);
        bookWrap.appendChild(bookLabel);

        // bookContainerにbookWrapを追加
        bookContainer.appendChild(bookWrap);

        // 各リンクにクリックイベントリスナーを追加
        (function(index) {
            bookLink.addEventListener('click', function(event) {
                event.preventDefault(); // デフォルトのリンク動作を抑制

                // アラートを表示
                alert(`リンク ${index + 1} がクリックされました。リンク先: ${bookLink.href}`);

                // リンク先に移動
                window.location.href = bookLink.href;
            });
        })(i);
    }
});