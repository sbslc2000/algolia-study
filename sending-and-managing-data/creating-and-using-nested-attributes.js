/**
 * Nested Attributes는 속성의 서브카테고리를 정의할 수 있는 방법이다.
 * 예를 들어, price라는 하나의 속성에 대해서 `price.net`, `price.gross`, `price.margin`과 같은 다른 값들을 설정할 수 있다.
 * 서브 카테고리를 부모 요소와 구분 짓기 위해서는 'dot notation'을 사용한다.
 *
 * [
 *   {
 *     "country": "CA",
 *     "price": {
 *       "net": 2.30,
 *       "gross": 2.62
 *     }
 *   },
 *   {
 *     "country": "US",
 *     "price": {
 *       "net": 1.99,
 *       "gross": 1.75
 *     }
 *   }
 * ]
 */
const { index } = require('../init');
const search = async () => {
    const hits = await index.search('', {
        filters: 'price.gross < 2.31',
    });

    console.log(hits);
}

search();