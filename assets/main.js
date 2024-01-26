document.querySelectorAll('.page-link').forEach((item) => {
   item.addEventListener('click', (e) => {
      e.preventDefault();
      let page = + item.dataset.page;
       if(page){
           fetch('actions.php', {
               method: "POST",
               body: JSON.stringify({page: page})
           }).then((responce) => {
               responce.text()
           }).then((data) => {
               console.log(data)
           }).catch(e => {
               console.log(e)
           })

       }
   });
});