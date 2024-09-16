// Услуги экспортерам
document.addEventListener('DOMContentLoaded', function() {
    const toggleServices = document.querySelector('.toggle-services');
    const servicesList = document.querySelector('.services-list');
    
    if (toggleServices && servicesList) {
        const arrow = toggleServices.querySelector('img');

        toggleServices.addEventListener('click', function(event) {
            event.preventDefault();
            servicesList.classList.toggle('open');
            arrow.style.transform = servicesList.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    }
});

// Услуги экспортерам синий
document.addEventListener('DOMContentLoaded', function() {
    const toggleServicesBlue = document.querySelector('.toggle-services-blue');
    const servicesListBlue = document.querySelector('.services-list-blue');
    
    if (toggleServicesBlue && servicesListBlue) {
        const arrowBlue = toggleServicesBlue.querySelector('img');

        toggleServicesBlue.addEventListener('click', function(event) {
            event.preventDefault();
            servicesListBlue.classList.toggle('open');
            arrowBlue.style.transform = servicesListBlue.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    }
});

// Катало Услуг
document.querySelectorAll('.service-title-catalog-uslug').forEach(title => {
    title.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        const submenu = document.querySelector(`.submenu-catalog-uslug[data-index="${index}"]`);
        const arrow = this.querySelector('.arrow-catalog-uslug');
        const content = document.querySelector('.sidebar-main-catalog-uslug');

        // Toggle submenu display
        if (submenu) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            if (arrow) {
                arrow.classList.toggle('rotated-catalog-uslug');
            }
        }

        // Toggle content width
        const expanded = this.getAttribute('data-expanded') === 'true';
        if (expanded) {
            content.style.height = `${parseInt(content.style.height || content.offsetHeight) - 70}px`;
        } else {
            content.style.height = `${parseInt(content.style.height || content.offsetHeight) + 70}px`;
        }

        // Toggle the data-expanded attribute
        this.setAttribute('data-expanded', !expanded);
    });
});

// Каталог услуг мобильный
document.querySelectorAll('.service-title-catalog-uslug-mobile').forEach(title => {
    title.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        const submenu = document.querySelector(`.submenu-catalog-uslug-mobile[data-index="${index}"]`);
        const arrow = this.querySelector('.arrow-catalog-uslug-mobile');
        const content = document.querySelector('.sidebar-main-catalog-uslug-mobile');

        // Toggle submenu display
        if (submenu) {
            submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
            if (arrow) {
                arrow.classList.toggle('rotated-catalog-uslug');
            }
        }

        // Toggle content width
        const expanded = this.getAttribute('data-expanded') === 'true';
        if (expanded) {
            content.style.height = `${parseInt(content.style.height || content.offsetHeight) - 70}px`;
        } else {
            content.style.height = `${parseInt(content.style.height || content.offsetHeight) + 70}px`;
        }

        // Toggle the data-expanded attribute
        this.setAttribute('data-expanded', !expanded);
    });
});

// Календарь 
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date-input');
    const calendar = document.getElementById('calendar');
    const monthSelect = document.getElementById('month-select');
    const yearSelect = document.getElementById('year-select');
    const calendarDays = document.querySelector('.calendar-days');
    
    let selectedDate = new Date();
    
    dateInput.addEventListener('click', () => {
        calendar.style.display = 'block';
    });
    
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.calendar-container')) {
            calendar.style.display = 'none';
        }
    });
    
    for (let year = 2024; year <= 2034; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
    
    monthSelect.value = selectedDate.getMonth();
    yearSelect.value = selectedDate.getFullYear();
    
    function renderCalendar() {
        calendarDays.innerHTML = '';
        const year = yearSelect.value;
        const month = monthSelect.value;
        const firstDay = (new Date(year, month, 1).getDay() + 6) % 7; // Понедельник начинается с 0
        const lastDate = new Date(year, parseInt(month) + 1, 0).getDate();
        
        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement('div');
            calendarDays.appendChild(emptyDiv);
        }
        
        for (let date = 1; date <= lastDate; date++) {
            const dateDiv = document.createElement('div');
            dateDiv.textContent = date;
            const day = (new Date(year, month, date).getDay() + 6) % 7; // Понедельник начинается с 0
            if (day === 5 || day === 6) {
                dateDiv.classList.add('weekend');
            }
            if (selectedDate.getDate() === date &&
                selectedDate.getMonth() === parseInt(month) &&
                selectedDate.getFullYear() === parseInt(year)) {
                dateDiv.classList.add('selected');
            }
            dateDiv.addEventListener('click', () => {
                selectedDate = new Date(year, month, date);
                dateInput.value = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
                renderCalendar();
                calendar.style.display = 'none';
            });
            calendarDays.appendChild(dateDiv);
        }
    }
    
    monthSelect.addEventListener('change', renderCalendar);
    yearSelect.addEventListener('change', renderCalendar);
    
    renderCalendar();
});

// Фильтры со страницы "Календарь мероприятий" 
document.addEventListener('DOMContentLoaded', function() {
var dropdowns = document.querySelectorAll('.calendar-dropdown');

dropdowns.forEach(function(dropdown) {
    var button = dropdown.querySelector('.calendar-dropbtn');
    var content = dropdown.querySelector('.calendar-dropdown-content');
    var checkboxes = content.querySelectorAll('input[type="checkbox"]');
    var allCheckbox = content.querySelector('.all-checkbox');

    button.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleDropdown(dropdown);
    });

    // Добавление класса к dropdown-content при открытии дропдауна
    dropdown.addEventListener('click', function() {
        if (dropdown.classList.contains('industries-dropdown')) {
            content.classList.add('industries-dropdown');
        } else {
            content.classList.remove('industries-dropdown');
        }
    });

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            if (checkbox === allCheckbox) {
                toggleAllCheckboxes(checkboxes, checkbox.checked);
            }
            updateButtonLabel(button, checkboxes, dropdown);
        });
    });
});

// Обработчик для кнопки "Сбросить фильтры"
var resetButton = document.querySelector('.filters-reset-buttons button');
resetButton.addEventListener('click', function() {
    // Сбросить все чекбоксы в каждом дропдауне
    dropdowns.forEach(function(dropdown) {
        var checkboxes = dropdown.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        });
        updateButtonLabel(dropdown.querySelector('.calendar-dropbtn'), checkboxes, dropdown);
    });
});

window.onclick = function(event) {
    if (!event.target.matches('.calendar-dropbtn')) {
        closeAllDropdowns();
    }
};

function toggleDropdown(dropdown) {
    dropdown.classList.toggle('show');
}

function closeAllDropdowns() {
    dropdowns.forEach(function(dropdown) {
        dropdown.classList.remove('show');
    });
}

function toggleAllCheckboxes(checkboxes, isChecked) {
    checkboxes.forEach(function(checkbox) {
        if (!checkbox.classList.contains('all-checkbox')) {
            checkbox.checked = isChecked;
        }
    });
}

function updateButtonLabel(button, checkboxes, dropdown) {
    var checkedBoxes = Array.from(checkboxes).filter(function(checkbox) {
        return checkbox.checked && !checkbox.classList.contains('all-checkbox');
    });

    if (dropdown.classList.contains('countries-dropdown')) {
        if (checkedBoxes.length === 0) {
            button.childNodes[0].textContent = 'Все страны ';
        } else if (checkedBoxes.length === 1) {
            button.childNodes[0].textContent = checkedBoxes[0].value + ' ';
        } else {
            button.childNodes[0].textContent = 'Выбрано стран (' + checkedBoxes.length + ') ';
        }
    } else if (dropdown.classList.contains('events-dropdown')) {
        if (checkedBoxes.length === 0) {
            button.childNodes[0].textContent = 'Все типы мероприятий ';
        } else {
            button.childNodes[0].textContent = 'Выбрано (' + checkedBoxes.length + ') ';
        }
    } else if (dropdown.classList.contains('industries-dropdown')) {
        if (checkedBoxes.length === 0) {
            button.childNodes[0].textContent = 'Все отрасли ';
        } else {
            button.childNodes[0].textContent = 'Выбрано (' + checkedBoxes.length + ') ';
        }
    }
}
});

// Календарь мероприятий мобильный
document.querySelector('.show-more-filters').addEventListener('click', function(event) {
    event.preventDefault();

    const showMoreButton = document.querySelector('.show-more-filters');
    const showLessButton = document.querySelector('.show-less-filters');
    const dropdowns = document.querySelectorAll('.calendar-dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('hidden-filters');
    });

    showMoreButton.classList.add('hidden-filters');
    showLessButton.classList.remove('hidden-filters');
});

document.querySelector('.show-less-filters').addEventListener('click', function(event) {
    event.preventDefault();

    const showMoreButton = document.querySelector('.show-more-filters');
    const showLessButton = document.querySelector('.show-less-filters');
    const dropdowns = document.querySelectorAll('.calendar-dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.classList.add('hidden-filters');
    });

    showMoreButton.classList.remove('hidden-filters');
    showLessButton.classList.add('hidden-filters');
});

