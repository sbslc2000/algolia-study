/**
 * DataSet
 * [
 *   {
 *     "title": "Gluten free sponge cake",
 *     "ingredients": [
 *       "gluten free self raising flour",
 *       "caster sugar",
 *       "eggs"
 *     ],
 *     "images": [
 *       "https://yourdomain.com/bread-and-cakes/glutenfreesponge1.jpg",
 *       "https://yourdomain.com/bread-and-cakes/glutenfreesponge2.jpg"
 *     ],
 *     "comments": [
 *       "This is incredible! I added raisins, and it was even better."
 *     ]
 *   },
 *   {
 *     "title": "Gluten-free oatmeal cinnamon raisin bread",
 *     "ingredients": [
 *       "brown rice flour",
 *       "potato starch",
 *       "raisins"
 *     ],
 *     "images": [
 *       "https://yourdomain.com/bread-and-cakes/glutenfreeoatmealraisins1.jpg",
 *       "https://yourdomain.com/bread-and-cakes/glutenfreeoatmealraisins2.jpg"
 *     ],
 *     "comments": [
 *       "Amazing, this almost tastes like cake."
 *     ]
 *   }
 * ]
 *
 * 이 경우 레시피를 검색하는데에 image는 필요하지 않을 뿐 더러,
 * 검색 결과를 해칠 수 있다. 이를 방지하기 위해 searchableAttributes에 대한 설정이 필요하다.
 */
const { index } = require('../init');

index.setSettings({
    searchableAttributes: [
        'title,comments', // 이 경우 title과 comments는 같은 우선순위를 갖는다.
        'ingredients',
    ]
}).then(() => {
    //done
})

index.setSettings({
    searchableAttributes: [
        'title',
        'ingredients',
        'comments', //이 경우 comments는 가장 낮은 우선순위를 갖는다.
    ]
}).then(() => {
    //done
})