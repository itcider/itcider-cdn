      function snsShare(title, url){
      if(navigator.share){
      navigator.share({
      title: '', // 공유될 제목
      url: '', // 공유될 URL

      });
       options.title = document.querySelector('.post').innerText;
        options.url = location.href;
      $().ready(function () {
            $("#shared").click(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'center-center',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: '공유가 완료되었습니다.'
                })
            });
        });

      }else 

      $().ready(function () {
            $("#shared").click(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'center-center',
                    showConfirmButton: false,
                    timer: 2500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'error',
                    title: '공유가 지원되지 않는 브라우저입니다 <br> 왼쪽의 링크 복사 버튼 이용 부탁드립니다.'
                })
            });
        });


      }
