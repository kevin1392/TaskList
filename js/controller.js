'use strict';

var newTaskEl = document.getElementById('new-task');
var taskList = document.getElementById('task-list');

var inbox = new List('inbox');

function addTask(e) {
    var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

    e.preventDefault();
    if (e.which === 13) {
        var newTask = new Task(this.value);
        list.addTask(newTask);
        printTask(this.value);
        this.value = "";
        console.table(list.tasks);
    }
}

function editTask() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : inbox;

    var listItems = taskList.children;

    var _loop = function _loop(i) {
        listItems[i].querySelector('span').addEventListener('blur', function () {
            list.tasks[i].edit(listItems[i].querySelector('span').textContent);
            console.table(list.tasks);
        });
    };

    for (var i = 0; i < listItems.length; i++) {
        _loop(i);
    }
}

function completTask() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : inbox;

    var listItems = taskList.children;

    var _loop2 = function _loop2(i) {
        listItems[i].querySelector('input').addEventListener('change', function () {
            if (listItems[i].querySelector('input').checked) {
                list.tasks[i].complete();
                listItems[i].classList.add('complete');
            }
            console.table(list.tasks);
        });
    };

    for (var i = 0; i < listItems.length; i++) {
        _loop2(i);
    }
}

function removeTask() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : inbox;

    var listItems = taskList.children;

    var _loop3 = function _loop3(i) {
        listItems[i].querySelector('a').addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var _i = i;
            list.removeTask(_i); //para el OBJETO ...JSON
            this.parentElement.remove(); //para el DOOM
            console.log(_i);
            console.table(list.tasks);
            completTask();
        });
    };

    for (var i = 0; i < listItems.length; i++) {
        _loop3(i);
    }
}

newTaskEl.addEventListener('keyup', addTask);