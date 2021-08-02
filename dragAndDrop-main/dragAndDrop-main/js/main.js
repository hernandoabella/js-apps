const dropItemsOne = document.getElementById('drop-items-one');
const dropItemsTwo = document.getElementById('drop-items-two');
const dropItemsThree = document.getElementById('drop-items-three');

new Sortable(dropItemsOne, {
    group: 'shared', // set both lists to same group
    animation: 300,
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag"
});

new Sortable(dropItemsTwo, {
    group: 'shared',
    animation: 300,
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag"
});

new Sortable(dropItemsThree, {
    group: 'shared',
    animation: 300,
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag"
});