export const showParts = function() {

    let pc = 0;
    document.querySelectorAll('.show-parts').forEach(element => {

        //generate random id so we can select only the direct child
        if(!element.id) element.id = ("show-" + (++pc) + Math.random().toString(36).substring(2));
        //select the trigger scoped under the id we generated
        element.querySelector(`#${element.id} > .trigger`).addEventListener("click", event => {
            //get next element and add show class
            element.querySelector(`#${element.id} > span.hide:not(.show)`).classList.add('show');

            //get next element again to check if there are any more remaining
            let next = element.querySelector(`#${element.id} > span.hide:not(.show)`);
            if(!next) {
                //no more elements to go, now we can remove the styles
                document.querySelector(`#${element.id} > .trigger`).classList.add('no-trigger');
            }

        });
    })

}
