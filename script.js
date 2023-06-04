const toggleMenu = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
toggleMenu.onClick = function(){
  toggleMenu.classList.toggle('active');
  navigation.classList.toggle('active');
}