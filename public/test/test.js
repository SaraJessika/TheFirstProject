import Component from '../js/components/Base/Component.js';

describe("Тестируем базовые компоненты", function() {
   'use strict';
    
   describe("Тестируем базовый компонент", function() {
    
        it('Конструирование компонента', function() {
            // arrange
            let props = {};

            // act
            const comp = new Component(props);

            //assert
            assert(comp instanceof Component);
        });

        it('Рендер компонента должен вернуть пустой блок div', function() {
            // arrange
            const comp = new Component({});
            
            // act
            let render = comp.render();

            //assert
            assert.equal(render, '<div></div>');
        });

        it('Монтирование компонента должен вернуть пустой блок div в элементе', function() {
            // arrange
            const comp = new Component({});
            let elem = document.createElement('div');
            
            // act
            comp.mount(elem);

            //assert
            assert.equal(elem.innerHTML, `<div id="${comp.id}"></div>`);
        });
   });
});

mocha.run();
