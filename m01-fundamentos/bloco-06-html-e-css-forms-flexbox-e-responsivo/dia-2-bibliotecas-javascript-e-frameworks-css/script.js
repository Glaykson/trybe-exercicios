function submit(event) {
    event.preventDefault();
  }

  window.onload = function () {
    const submitButton = document.querySelector('#submit-button');
    submitButton.addEventListener('click', submit);
  };

  function limparForm() {
    const tagInput = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < tagInput.length; index += 1) {
      const userInput = tagInput[index];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
  }

  window.onload = function () {
    const clearBtn = document.querySelector('#limpar-btn');
    clearBtn.addEventListener('click', limparForm);
    const submitBtn = document.querySelector('#submit-button');
    submitBtn.addEventListener('click', submit);
  };
  