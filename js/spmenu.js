/*! SP表示時のハンバーガーメニューの動きを実装 */
/*! id="SP_MENU_BUTTON" がついているタグをクリックしたら、id="PC_MENU" がついているタグに対して、
    slideToggleファンクションを実行します。 */

$(document).ready(function(){
  $("#SP_MENU_BUTTON").click(function () {
    $("#PC_MENU").slideToggle();
  });
});
