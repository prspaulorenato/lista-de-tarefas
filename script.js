$(document).ready(function () {
   $('form').on('submit', function (e) {
      e.preventDefault();
      const tarefa = $('#tarefa-nome').val();
      const novaTarefa = $('<div style="display:none"></div>');

      $(`<li class="item-tarefa">
         ${tarefa}
      </li>
      `).appendTo(novaTarefa);
      $(novaTarefa).appendTo('#lista-tarefas');
      $(novaTarefa).fadeIn(1000);
      $('#tarefa-nome').val('');
   });

   $('#lista-tarefas').on('click', '.item-tarefa', function (e) {
      e.preventDefault()
      $(this).toggleClass('riscado');

      if ($(this).hasClass('riscado')) {
         Swal.fire({
            icon: 'success',
            title: 'Uoba!',
            text: 'Você concluiu essa tarefa com sucesso.',
            confirmButtonText: 'OK'
         });
         $('.item-tarefa').fadeOut(2000, function () {
            $(this).remove();
         })

      }
   });

});
