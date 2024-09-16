document.addEventListener('DOMContentLoaded', function() {
    const expandSidebarBtn = document.querySelector('.expand-sidebar-btn');
    const overlaySidebar = document.getElementById('overlay-sidebar');
    const closeOverlayBtn = document.querySelector('.close-overlay-btn');

    if (expandSidebarBtn && overlaySidebar && closeOverlayBtn) {
        expandSidebarBtn.addEventListener('click', function() {
            overlaySidebar.style.display = 'flex';
        });

        closeOverlayBtn.addEventListener('click', function() {
            overlaySidebar.style.display = 'none';
        });
    } else {
        console.error('One or more elements are missing.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const expandSidebarBtn = document.querySelector('.expand-sidebar-btn-support');
    const overlaySidebar = document.getElementById('overlay-sidebar-support');
    const closeOverlayBtn = document.querySelector('.close-overlay-btn-support');

    if (expandSidebarBtn && overlaySidebar && closeOverlayBtn) {
        expandSidebarBtn.addEventListener('click', function() {
            overlaySidebar.style.display = 'flex';
        });

        closeOverlayBtn.addEventListener('click', function() {
            overlaySidebar.style.display = 'none';
        });
    } else {
        console.error('One or more elements are missing.');
    }
});

// Меню мобильное
document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для кнопки меню
    var menuButton = document.querySelector('.header__button-menu a');
    if (menuButton) {
        menuButton.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Переключение видимости блока header__buttons
            var headerButtons = document.querySelector('.header__buttons-mobile');
            if (headerButtons) {
                headerButtons.style.display = headerButtons.style.display === 'flex' ? 'none' : 'flex';
            }
            
            // Изменение высоты блока block-blue
            var blockBlue = document.querySelector('.block-blue');
            if (blockBlue) {
                blockBlue.style.height = blockBlue.style.height === '1160px' ? '960px' : '1160px';
            }
        });
    }
});

// Меню мобильное синее
document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для кнопки меню
    var menuButton = document.querySelector('.header__button-menu a');
    if (menuButton) {
        menuButton.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Переключение видимости блока header__buttons
            var headerButtons = document.querySelector('.header__buttons-mobile-blue');
            if (headerButtons) {
                headerButtons.style.display = headerButtons.style.display === 'flex' ? 'none' : 'flex';
            }
        });
    }
});

// Слайдер База знаний мобильный для тегов
var swiper = new Swiper('.mobile-base-sciense-tags', {
			slidesPerView: 1, // Автоматическое определение количества слайдов, видимых одновременно
			spaceBetween: 25, // Расстояние между слайдами
			grabCursor: true, // Смена курсора при наведении на слайдер
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});

// Слайдер База знаний мобильный
var customSwiper = new Swiper('#mobile-base-sciense', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Маска ввода номера телефона
var phoneInput = document.getElementById('phone-input');
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(phoneInput);

// Cлайдер мобильный популярных платформ
var swiper1 = new Swiper(".MobilePopular", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

// Cлайдер мобильный популярных платформ
var swiper2 = new Swiper(".MobileEvents", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



// Слайдер на около хедера
$(document).ready(function(){
  $('#FirstSlider').owlCarousel({
    items: 1,            // Отображать только 1 элемент за раз
    loop: true,          // Зациклить карусель
    autoplay: false,      // Включить автоматическую прокрутку
    autoplayTimeout: 5000,  // Время между автоматическими прокрутками (в миллисекундах)
    autoplayHoverPause: true,  // Пауза при наведении мыши
    dots: true,
    nav: true,
    navElement: 'img src="img/пагинация.png" alt="Стрелка вправо"',
    margin: 10,
  });
});

// Слайдер для мобильного блока "Блог"
$(document).ready(function(){
  $('#MobileBlog').owlCarousel({
    items: 1,            // Отображать только 1 элемент за раз
    loop: true,          // Зациклить карусель
    autoplay: false,      // Включить автоматическую прокрутку
    autoplayTimeout: 5000,  // Время между автоматическими прокрутками (в миллисекундах)
    autoplayHoverPause: true,  // Пауза при наведении мыши
    dots: true,
    nav: true,
    navElement: 'img src="img/пагинация.png" alt="Стрелка вправо"',
    margin: 5,
  });
});

// Видео по работе с платформой
document.addEventListener("DOMContentLoaded", function() {
    // Получаем элементы
    var modal = document.getElementById("videoModal");
    var btn = document.getElementById("links__popup-video");
    var span = document.getElementsByClassName("close")[0];

    // Функция для скрытия модального окна после завершения анимации
    function hideModal() {
        modal.style.display = "none";
        var modalContent = modal.querySelector('.modal-content');
        modalContent.classList.remove('hide'); // Удаляем класс после скрытия
    }

    // Открываем модальное окно при клике на кнопку
    btn.onclick = function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        modal.style.display = "flex"; // Используем flex для центровки
    }

    // Закрываем модальное окно при клике на кнопку закрытия
    span.onclick = function() {
        var modalContent = modal.querySelector('.modal-content');
        modalContent.classList.add('hide');
        // Ждем завершения анимации перед скрытием модального окна
        setTimeout(hideModal, 400);
    }

    // Закрываем модальное окно при клике вне его
    window.onclick = function(event) {
        if (event.target == modal) {
            var modalContent = modal.querySelector('.modal-content');
            modalContent.classList.add('hide');
            // Ждем завершения анимации перед скрытием модального окна
            setTimeout(hideModal, 400);
        }
    }
});

// База знаний экспортеров
document.addEventListener('DOMContentLoaded', () => {
    const expandableBlocks = document.querySelectorAll('.expandable-block');
    const baseScienseMain = document.querySelector('.base-sciense-main');

    expandableBlocks.forEach(expandableBlock => {
        const toggleIcon = expandableBlock.querySelector('.toggle-icon');
        const content = expandableBlock.nextElementSibling;
        const tagsInBlock = expandableBlock.querySelector('.expandable-block-tags');
        const tagsInContent = content.querySelector('.expandable-block-tags');
        let isExpanded = false;

        // Функция для установки состояния тегов
        const setTagsState = (active) => {
            const tags = tagsInContent.querySelectorAll('.expandable-block-tag-border');

            tags.forEach(tag => {
                tag.classList.toggle('inactive', !active);
            });

            if (active) {
                tagsInContent.addEventListener('click', handleTagClick);
            } else {
                tagsInContent.removeEventListener('click', handleTagClick);
            }
        };

        // Обработчик кликов на теги в блоке expandable-block-tags
        const handleTagClick = (event) => {
            const clickedTag = event.target.closest('.expandable-block-tag-border');
            if (!clickedTag || !tagsInContent.contains(clickedTag)) {
                return;
            }

            // Убираем активное состояние со всех тегов
            tagsInContent.querySelectorAll('.expandable-block-tag-border').forEach(tag => {
                tag.classList.remove('active');
            });

            // Добавляем активное состояние к выбранному тегу
            clickedTag.classList.add('active');
        };

        expandableBlock.addEventListener('click', () => {
            isExpanded = !isExpanded;
            if (isExpanded) {
                expandableBlock.classList.add('expanded');
                expandableBlock.style.borderBottomLeftRadius = '0';
                expandableBlock.style.borderBottomRightRadius = '0';
                toggleIcon.src = 'img/Vector.png';
                content.classList.add('expanded');
                tagsInContent.innerHTML = tagsInBlock.innerHTML;
                tagsInBlock.innerHTML = '';

                // Отображаем тег "все услуги"
                const allServicesTag = tagsInContent.querySelector('.expandable-block-tag-border:first-child');
                allServicesTag.style.display = 'flex';

                // Разрешаем кликабельность тегов
                setTagsState(true);
            } else {
                expandableBlock.classList.remove('expanded');
                expandableBlock.style.borderBottomLeftRadius = '20px';
                expandableBlock.style.borderBottomRightRadius = '20px';
                toggleIcon.src = 'img/plus.png';
                content.classList.remove('expanded');
                tagsInBlock.innerHTML = tagsInContent.innerHTML;
                tagsInContent.innerHTML = '';

                // Скрываем тег "все услуги"
                const allServicesTag = tagsInBlock.querySelector('.expandable-block-tag-border:first-child');
                allServicesTag.style.display = 'none';

                // Запрещаем кликабельность тегов
                setTagsState(false);
            }

            // Автоматически изменяем размер контейнера
            adjustBaseScienseHeight();
        });

        // Начальное скрытие тега "все услуги"
        const allServicesTag = tagsInBlock.querySelector('.expandable-block-tag-border:first-child');
        allServicesTag.style.display = 'none';
    });

    // Функция для автоматического изменения высоты родительского контейнера
    const adjustBaseScienseHeight = () => {
        let totalHeight = -40;
        expandableBlocks.forEach(block => {
            totalHeight += block.offsetHeight;
            if (block.classList.contains('expanded')) {
                totalHeight += block.nextElementSibling.offsetHeight;
            }
        });
        baseScienseMain.style.height = `${totalHeight + 0}px`; // 20px для дополнительных отступов
    };
});

// Часто задаваемые вопросы
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.questions-dropdown');

    dropdowns.forEach(function(dropdown) {
        const header = dropdown.querySelector('.dropdown-header');
        const content = dropdown.querySelector('.dropdown-text');
        const arrow = header.querySelector('img');

        header.addEventListener('click', function() {
            if (dropdown.classList.contains('open')) {
                dropdown.classList.remove('open');
                dropdown.style.maxHeight = '58px';
                content.style.display = 'none';
                arrow.style.transform = 'rotate(0deg)';
            } else {
                dropdown.classList.add('open');
                dropdown.style.maxHeight = '250px';
                content.style.display = 'block';
                arrow.style.transform = 'rotate(180deg)';
            }
        });
    });
});

// Часто задаваемые вопросы Техподдержка
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.questions-dropdown-support');

    dropdowns.forEach(function(dropdown) {
        const header = dropdown.querySelector('.dropdown-header-support');
        const content = dropdown.querySelector('.dropdown-text-support');
        const arrow = header.querySelector('img');

        header.addEventListener('click', function() {
            if (dropdown.classList.contains('open')) {
                dropdown.classList.remove('open');
                dropdown.style.maxHeight = '58px';
                content.style.display = 'none';
                arrow.style.transform = 'rotate(0deg)';
            } else {
                dropdown.classList.add('open');
                dropdown.style.maxHeight = '250px';
                content.style.display = 'block';
                arrow.style.transform = 'rotate(180deg)';
            }
        });
    });
});

// Описание от страницы "Мероприятия"
function toggleDescription() {
    const arrows = document.querySelectorAll(".arrow-page-uslugi");
    const contents = document.querySelectorAll(".description-content-page-uslugi");

    contents.forEach(content => {
        if (content.style.display === "flex") {
            content.style.display = "none";
        } else {
            content.style.display = "flex";
        }
    });

    arrows.forEach(arrow => {
        if (arrow.style.transform === "rotate(180deg)") {
            arrow.style.transform = "rotate(0deg)";
        } else {
            arrow.style.transform = "rotate(180deg)";
        }
    });
}

function toggleInnerDescription(event) {
    event.stopPropagation();
    const arrow = event.target;
    const parentDiv = arrow.closest(".description-content-page-uslugi");
    const innerContent = parentDiv.querySelector(".inner-content");

    if (innerContent.style.display === "block") {
        innerContent.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    } else {
        innerContent.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
    }
}

function toggleTag(element) {
    const buttons = document.querySelectorAll('.tag-button-catalog-uslug');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    element.classList.add('active');
}

// document.querySelectorAll('.service-title').forEach(title => {
//     title.addEventListener('click', function() {
//         const index = this.getAttribute('data-index');
//         const submenu = document.querySelector(`.submenu[data-index="${index}"]`);
//         const arrow = this.querySelector('.arrow');
//         const content = document.querySelector('.sidebar');

//         // Toggle submenu display
//         if (submenu) {
//             submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
//             if (arrow) {
//                 arrow.classList.toggle('rotated');
//             }
//         }

//         // Toggle content width
//         const expanded = this.getAttribute('data-expanded') === 'true';
//         if (expanded) {
//             content.style.height = `${parseInt(content.style.height || content.offsetHeight) - 70}px`;
//         } else {
//             content.style.height = `${parseInt(content.style.height || content.offsetHeight) + 70}px`;
//         }

//         // Toggle the data-expanded attribute
//         this.setAttribute('data-expanded', !expanded);
//     });
// });

// Дропдаун на странице Техническая поддержка
function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const dropdownToggle = document.querySelector('.support-dropdown-toggle');
    dropdownMenu.classList.toggle('show');
    dropdownToggle.classList.toggle('rotate');
}

// Дропдаун на странице Техническая поддержка Мобильный
function toggleDropdownMobile() {
    const dropdownMenuMobile = document.getElementById('dropdownMenuMobile');
    const dropdownToggleMobile = document.querySelector('.support-dropdown-toggle-mobile');
    dropdownMenuMobile.classList.toggle('show');
    dropdownToggleMobile.classList.toggle('rotate');
}

// Страница "Услуги"
function toggleDescription() {
    const arrows = document.querySelectorAll(".arrow-page-uslugi");
    const contents = document.querySelectorAll(".description-content-page-uslugi");

    contents.forEach(content => {
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });

    arrows.forEach(arrow => {
        if (arrow.style.transform === "rotate(180deg)") {
            arrow.style.transform = "rotate(0deg)";
        } else {
            arrow.style.transform = "rotate(180deg)";
        }
    });
}

function toggleInnerDescription(event) {
    event.stopPropagation();
    const arrow = event.target;
    const parentDiv = arrow.closest(".description-content-page-uslugi");
    const innerContent = parentDiv.querySelector(".inner-content");

    if (innerContent.style.display === "block") {
        innerContent.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    } else {
        innerContent.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
    }
}

document.querySelectorAll('.newsdetail-news-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.newsdetail-news-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownMenuLinks = document.querySelectorAll('#dropdownMenu a');
    const questionsBlock = document.getElementById('questionsBlock');
    const inputBlock = document.getElementById('inputBlock');
    const askQuestionButton = document.querySelector('.support-dropdown-input');

    dropdownMenuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем переход по ссылке

            // Показываем блок с вопросами и скрываем блок с формой
            questionsBlock.style.display = 'block';
            inputBlock.style.display = 'none';
        });
    });

    askQuestionButton.addEventListener('click', function() {
        // Показываем блок с формой и скрываем блок с вопросами
        questionsBlock.style.display = 'none';
        inputBlock.style.display = 'block';
    });
});

document.addEventListener("DOMContentLoaded", function() {
        var menu = document.getElementById("dropdownMenuMobile");
        var links = menu.getElementsByTagName("a");
        var overlay = document.getElementById("overlay-sidebar-support");
        var questionsBlock = document.getElementById("questionsBlock");
        var feedbackForm = document.querySelector(".support-input-block");
        var supportButton = document.querySelector(".support-dropdown-input-mobile");

        function showQuestionsBlock() {
            overlay.style.display = "none";
            feedbackForm.style.display = "none";
            questionsBlock.style.display = "block";
        }

        function showFeedbackForm() {
            overlay.style.display = "none";
            questionsBlock.style.display = "none";
            feedbackForm.style.display = "block";
        }

        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener("click", function(event) {
                event.preventDefault(); // предотвращаем переход по ссылке, если нужно
                showQuestionsBlock();
            });
        }

        supportButton.addEventListener("click", function() {
            showFeedbackForm();
        });

        // Инициализируем начальное состояние
        showFeedbackForm();
    });
