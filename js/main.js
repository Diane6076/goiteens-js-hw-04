// <!-- #1 -->
// const changeText = document.querySelector('.changeText');
// const h1Text = document.querySelector('.h1');

// console.dir(h1Text);
// console.dir(changeText);

// changeText.addEventListener('click', function() {
// changeText.textContent = h1Text.textContent;
// });

// <!-- #2 -->
const imgo = document.querySelector('.imgg');
imgo.addEventListener('click', function(){
    imgo.src = 'https://kartinkin.net/uploads/posts/2022-12/1669979192_1-kartinkin-net-p-fon-s-kuromi-vkontakte-2.jpg';
});

// <!-- #3 -->
const link = document.querySelector('.link1');
const imges = document.querySelector('.imgs');

link.href = 'https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg';
imges.alt = 'Нове зображення'
// <!-- #4 -->
const list =document.querySelector('.list');
const li =document.querySelector('li');
li.textContent = 'what about you';