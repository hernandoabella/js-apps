/**
 * Encapsulate the game
 */
var Game = function() {
    // the empty slots for moving cards
    this.free = [null, null, null, null];
    // the spaces to hold the completed suits
    this.suits = [null, null, null, null];
    // the columns of cards
    this.columns = [[], [], [], [], [], [], [], []];
    // the deck of cards
    this.deck = new this.Deck();
};

/**
 * Initialise the game object.
 */
Game.prototype.init = function() {
    var card;

    // shuffle the deck
    this.deck.shuffle();

    for (var i = 0; i < 52; i++) {
        // add the cards to the columns
        card = this.deck.cards[i];
        this.columns[i % 8].push(card);
    }
};

/**
 * Reset the game
 */
Game.prototype.reset = function() {
    var i, col;

    this.free = [null, null, null, null];
    this.suits = [null, null, null, null];

    for (i = 0; i < 8; i++) {
        col = this.columns[i];
        col.length = 0;
    }

    this.init();
};

/**
 * Create an array of ids of the valid draggable cards.
 */
Game.prototype.valid_drag_ids = function() {
    var drag_ids, i, card, col, col_len;

    drag_ids = [];

    // add cards in freecell spaces
    for (i = 0; i < 4; i++) {
        card = this.free[i];
        if (card !== null) {
            drag_ids.push(card.id.toString());
        }
    }
    // add cards at the bottom of columns
    for (i = 0; i < 8; i++) {
        col = this.columns[i];
        col_len = col.length;
        if (col_len > 0) {
            card = col[col_len - 1];
            drag_ids.push(card.id.toString());
        }
    }

    return drag_ids;
};

/**
 * Create an array of ids of valid drop locations for the card. The ids are
 * the id attribute string in the DOM.
 */
Game.prototype.valid_drop_ids = function(card_id) {
    var drop_ids, i, free, suit_card, drag_card, bottom_cards, card, col;

    drop_ids = [];

    // the card being dragged
    drag_card = this.deck.get_card(card_id);

    // add empty freecells
    for (i = 0; i < 4; i++) {
        free = this.free[i];
        if (free === null) {
            drop_ids.push('free' + i.toString());
        }
    }

    // add a valid suit cell (if any)
    for (i = 0; i < 4; i++) {
        suit_card = this.suits[i];
        if (suit_card === null) {
            // if the card being dragged is an ace then this is a valid drop
            if (drag_card.value === 1) {
                drop_ids.push('suit' + i.toString());
            }
        } else {
            // is the card being dragged the next in the suit sequence to the
            // card in the suit cell - then valid drop
            if ((drag_card.suit === suit_card.suit) &&
                (drag_card.value === suit_card.value + 1)) {
                drop_ids.push('suit' + i.toString());
            }
        }
    }

    // add a valid card at the bottom of a column
    bottom_cards = this.col_bottom_cards();
    for (i = 0; i < bottom_cards.length; i++) {
        card = bottom_cards[i];

        if ((card.value === drag_card.value + 1) &&
            (card.colour !== drag_card.colour)) {
            drop_ids.push(card.id.toString());
        }
    }

    // add an empty column as a valid drop location
    for (i = 0; i < 8; i++) {
        col = this.columns[i];
        if (col.length === 0) {
            drop_ids.push('col' + i.toString());
        }
    }

    return drop_ids;
};

/*
 * Return an array of the cards that are at the bottom of columns
 */
Game.prototype.col_bottom_cards = function() {
    var i, col, card_count, bottom_cards;

    bottom_cards = [];

    for (i = 0; i < 8; i++) {
        col = this.columns[i];
        card_count = col.length;
        if (card_count > 0) {
            bottom_cards.push(col[card_count - 1]);
        }
    }

    return bottom_cards;
};

/**
 * Move a card to a new location
 *  drag_id is an integer
 *  drop_id is a string
 */
Game.prototype.move_card = function(drag_id, drop_id) {
    var drag_card, col_index;

    // pop the card from its current location
    drag_card = this.pop_card(drag_id);

    if (drop_id.length <= 2) {
        // dropping this card on another card in column
        drop_id = parseInt(drop_id, 10);
        this.push_card(drag_card, drop_id);
    } else {
        // dropping on a freecell or suit cell or empty column
        // the index of
        col_index = parseInt(drop_id.charAt(drop_id.length - 1), 10);
        if (drop_id.slice(0, 1) === 'f') {
            // dropping on a freecell
            this.free[col_index] = drag_card;
        } else if (drop_id.slice(0, 1) === 's') {
            // dropping on a suit cell
            this.suits[col_index] = drag_card;
        } else {
            // dropping on an empty column
            this.columns[col_index].push(drag_card);
        }
    }
};

/**
 * Return the card object and remove it from its current location
 * card_id is an integer.
 */
Game.prototype.pop_card = function(card_id) {
    var i, col, card;

    // check the bottom of each column
    for (i = 0; i < 8; i++) {
        col = this.columns[i];
        if (col.length === 0) {
            continue;
        }
        card = col[col.length - 1];
        if (card.id === card_id) {
            return col.pop();
        }
    }

    // check the freecells
    for (i = 0; i < 4; i++) {
        card = this.free[i];
        if ((card !== null) && (card.id === card_id)) {
            this.free[i] = null;
            return card;
        }
    }
    // shouldn't reach this point - should always find card
    alert('error in Game.pop_card()');
    return null;
};

/**
 * Push the card onto the end of a column based on the id of the bottom card
 */
Game.prototype.push_card = function(card, drop_id) {
    var i, col, col_len, bottom_card;

    for (i = 0; i < 8; i++) {
        col = this.columns[i];
        col_len = col.length;
        if (col_len === 0) {
            continue;
        }
        bottom_card = col[col.length - 1];
        if (bottom_card.id === drop_id) {
            col.push(card);
            return;
        }
    }
};

/**
 * Has the game been won?
 */
Game.prototype.is_game_won = function() {
    var i, card;

    for (i = 0; i < 4; i++) {
        card = this.suits[i];
        if (card === null || card.value !== 13) {
            return false;
        }
    }
    return true;
};

/******************************************************************************/

/**
 * Deck object - contains an array of Cards.
 */
Game.prototype.Deck = function() {
    var suits, values, colours, i, suit, value;

    suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    values = [1, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    colours = {'clubs': 'black',
               'spades': 'black',
               'hearts': 'red',
               'diamonds': 'red'};

    this.cards = [];
    for (i = 0; i < 52; i++) {
        suit = suits[i % 4];
        value = values[Math.floor(i / 4)];
        this.cards.push(new this.Card(i + 1, suit, value, colours[suit]));
    }
};

/**
 * shuffle the deck of cards
 */
Game.prototype.Deck.prototype.shuffle = function() {
    var len, i, j, item_j;

    // useful for debugging - deal the cards in optimal order
    /*
    this.cards.sort(function(a, b) {
        if (a.value < b.value) {
            return -1;
        }
        if (a.value > b.value) {
            return 1;
        }
        return 0;
    });
    this.cards.reverse();
    */

    len = this.cards.length;
    for (i = 0; i < len; i++) {
        j = Math.floor(len * Math.random());
        item_j = this.cards[j];
        this.cards[j] = this.cards[i];
        this.cards[i] = item_j;
    }
};

/**
 * Get the card by its id
 */
Game.prototype.Deck.prototype.get_card = function(card_id) {
    var i, card;

    for (i = 0; i < 52; i++) {
        card = this.cards[i];
        if (card_id === card.id) {
            return card;
        }
    }
    // only reach this if invalid card_id is supplied
    alert('error in Deck.get_card()');
    return null;
};

/******************************************************************************/

/**
 * Card object
 */
Game.prototype.Deck.prototype.Card = function(id, suit, value, colour) {
    this.id = id;
    this.suit = suit;
    this.value = value;
    this.colour = colour;
};

/**
 * does this card and another card share the same suit?
 */
Game.prototype.Deck.prototype.Card.prototype.sameSuit = function(other) {
    return this.suit === other.suit;
};

/**
 * does this card and another card share the same colour?
 */
Game.prototype.Deck.prototype.Card.prototype.sameColour = function(other) {
    return this.colour === other.colour;
};

/**
 * does this card and another card share the same value?
 */
Game.prototype.Deck.prototype.Card.prototype.sameValue = function(other) {
    return this.value === other.value;
};

/**
 * The image name and location as a string. Used when creating the web page.
 */
Game.prototype.Deck.prototype.Card.prototype.image = function() {
    return 'images/' + this.id.toString() + '.png';
};

/******************************************************************************/

/**
 * The user interface
 */
var UI = function(game) {
    this.game = game;
    // an array of all the draggables
    this.drag = [];
    // an array of all the droppables
    this.drop = [];
};

/**
 * Initialise the user interface
 */
UI.prototype.init = function() {
    this.game.init();

    this.add_cards();

    // set up the win dialog
    this.win();
    // set up the new game button
    this.new_game();
    // set up the help dialog and button
    this.help();

    this.setup_secret();

    // initialise draggables
    this.create_draggables();
};

/**
 * Add cards to the user interface
 */
UI.prototype.add_cards = function() {
    var i, j, cards, num_cards, col_div, card, img, card_div;

    for (i = 0; i < 8; i++) {
        cards = this.game.columns[i];
        num_cards = cards.length;

        // get a reference to the column div
        col_div = document.getElementById('col' + i.toString());

        for (j = 0; j < num_cards; j++) {
            // add card divs to the column div
            card = cards[j];
            img = new Image();
            img.src = card.image();

            card_div = document.createElement('div');
            card_div.className = 'card';
            card_div.id = card.id;
            card_div.style.top = (25 * j).toString() + 'px';
            card_div.appendChild(img);

            col_div.appendChild(card_div);
        }
    }
};

/**
 * Remove the cards from the user interface
 */
UI.prototype.remove_cards = function() {
    var i;

    for (i = 0; i < 8; i++)
    {
        $('#col' + i.toString()).empty();
    }
};

/**
 * Create draggables: cards in the freecells and at the bottoms of all the
 * columns can be dragged.
 */
UI.prototype.create_draggables = function() {
    var card_ids, card_count, i, id, card_div, this_ui;

    card_ids = this.game.valid_drag_ids();
    card_count = card_ids.length;
    this_ui = this;

    for (i = 0; i < card_count; i++) {
        id = card_ids[i];
        card_div = $('#' + id);

        // add to the list of draggables
        this_ui.drag.push(card_div);

        card_div.draggable({
            stack: '.card',
            containment: '#table',
            revert: 'invalid',
            revertDuration: 200,
            start: this_ui.create_droppables(),
            stop: this_ui.clear_drag()
        });
        card_div.draggable('enable');

        // add double-click event handling to all draggables
        card_div.bind('dblclick', {this_ui: this_ui}, this_ui.dblclick_draggable);

        card_div.hover(
            // hover start
            function(event) {
                $(this).addClass('highlight');
            },
            // hover end
            function(event) {
                $(this).removeClass('highlight');
            }
        );
    }
};

/**
 * When a draggable card is at the bottom of a column and it is double-clicked,
 * check if it can be moved to a foundation column or empty freecell. If it can,
 * then move it.
 */
UI.prototype.dblclick_draggable = function(event) {
    var this_ui, drop_ids, card_id, drop_len, i, drop_id, drop_div;
    this_ui = event.data.this_ui;

    // the valid drop locations for this card
    card_id = parseInt(this.id, 10);
    drop_ids = this_ui.game.valid_drop_ids(card_id);
    drop_len = drop_ids.length;

    // can the card be moved to a suit cell
    for (i = 0; i < drop_len; i++) {
        drop_id = drop_ids[i];
        if (drop_id.substr(0, 4) === 'suit') {
            this_ui.dblclick_move(card_id, drop_id, this_ui);
            return;
        }
    }

    // can the card be moved to an empty freecell
    for (i = 0; i < drop_len; i++) {
        drop_id = drop_ids[i];
        if (drop_id.substr(0, 4) === 'free') {
            this_ui.dblclick_move(card_id, drop_id, this_ui);
            return;
        }
    }
};

UI.prototype.dblclick_move = function(card_id, drop_id, this_ui) {
    var offset_end, offset_current, drop_div, left_end, top_end, left_move,
        top_move, card, left_current, top_current, max_z;

    card = $('#' + card_id);
    drop_div = $('#' + drop_id);
    offset_end = drop_div.offset();
    offset_current = card.offset();

    left_end = offset_end['left'];
    top_end = offset_end['top'];
    left_current = offset_current['left'];
    top_current = offset_current['top'];

    // add 3 for border
    left_move = left_end - left_current + 3;
    top_move = top_end - top_current + 3;

    // before moving the card, stack it on top of all other cards
    max_z = this_ui.card_max_zindex();
    card.css('z-index', max_z + 1);

    card.animate({top: '+=' + top_move, left: '+=' + left_move},
                  250,
                  function() {
                        // tell the game the card has moved
                        this_ui.game.move_card(card_id, drop_id);
                        this_ui.clear_drag()();
                        this_ui.is_won();

    });
};

UI.prototype.card_max_zindex = function() {
    var max_z = 0;
    $('.card').each(function(i, el) {
        z_index = parseInt($(el).css('z-index'), 10);
        if (!isNaN(z_index) && z_index > max_z) {
            max_z = z_index;
        }
    });
    return max_z;
};

/**
 * Create droppables: when a card is dragged, decide where it can be dropped.
 * this method should be called when a card drag is started.
 *
 * This method should use Game methods to make decisions.
 *
 * use this as the callback for the start event of the drag. This is why it has
 * the two parameters (event, ui).
 */
UI.prototype.create_droppables = function() {
    var this_ui;
    this_ui = this;

    var droppers = function(event, ui) {
        var drop_ids, i, drop_id, drag_id, drop_div;

        drag_id = parseInt($(this).attr('id'), 10);
        drop_ids = this_ui.game.valid_drop_ids(drag_id);

        for (i = 0; i < drop_ids.length; i++) {
            drop_id = drop_ids[i];
            drop_div = $('#' + drop_id.toString());
            // add to array of droppables
            this_ui.drop.push(drop_div);
            drop_div.droppable({
                // callback for drop event
                drop: function(event, ui) {
                    var card_offset, this_id;

                    this_id = $(this).attr('id');
                    if (this_id.length <= 2) {
                        // this is a card
                        card_offset = '0 25';
                    } else if (this_id.charAt(0) === 'c') {
                        // this is an empty column
                        card_offset = '1 1';
                    } else {
                        // this is a freecell or suit cell
                        card_offset = '3 3';
                    }

                    // move the droppable to the correct position
                    ui.draggable.position({
                        of: $(this),
                        my: 'left top',
                        at: 'left top',
                        offset: card_offset
                    });

                    // tell the game that the card has moved
                    this_ui.game.move_card(drag_id, this_id);

                    // has the game been completed
                    this_ui.is_won();

                    // reset ui so that there are no droppables
                    this_ui.clear_drop();
                }
            });
            drop_div.droppable('enable');
        }
    };

    return droppers;
};

/*
 * Clear all drag items
 */
UI.prototype.clear_drag = function() {
    var this_ui;
    this_ui = this;

    return function(event, ui) {
        var i, item;

        for (i = 0; i < this_ui.drag.length; i++) {
            item = this_ui.drag[i];
            // remove hover classes
            item.unbind('mouseenter').unbind('mouseleave');
            // force removal of highlight of cards that are dropped on the
            // suit cells
            $(this).removeClass('highlight');
            // remove double-click handler
            item.unbind('dblclick');
            item.draggable('destroy');
        }
        // empty the draggable array
        this_ui.drag.length = 0;

        // empty the droppable array - this makes sure that drop array is
        // cleared after an invalid drop
        this_ui.clear_drop();

        // create new draggables
        this_ui.create_draggables();
    };
};

/**
 * Clear all droppables
 */
UI.prototype.clear_drop = function() {
    var i, item;

    for (i = 0; i < this.drop.length; i++) {
        item = this.drop[i];
        item.droppable('destroy');
        //item.droppable('disable');
    }
    // empty the droppably array
    this.drop.length = 0;
};

UI.prototype.is_won = function() {
    if (this.game.is_game_won()) {
        this.win_animation();
        $('#windialog').dialog('open');
        //return false;
    }
};

/**
 * Animate the cards at the end of a won game
 */
UI.prototype.win_animation = function() {
    var i, $card_div, this_ui, v_x;

    for (i = 0; i < 53; i++) {
        $card_div = $('#' + ((i + 4)%52 + 1));
        this_ui = this;
        v_x = 3 + 3*Math.random();

        // this is necessary for IE because you can't pass parameters to
        // function in setTimeout. So need to create a closure to bind
        // the variables.
        function animator($card_div, v_x, this_ui) {
            setTimeout(function() {
                this_ui.card_animation($card_div, v_x, 0, this_ui);
            }, 250*i);
        }
        animator($card_div, v_x, this_ui);
    }
};

/**
 * Animation of a single card
 */
UI.prototype.card_animation = function($card_div, v_x, v_y, this_ui) {
    var pos, top, left, bottom;

    pos = $card_div.offset();
    top = pos.top;
    left = pos.left;

    // calculate new vertical velocity v_y
    bottom = $(window).height() - 96; // 96 is height of card div
    v_y += 0.5; // acceleration
    if (top + v_y + 3 > bottom) {
        // bounce card at bottom, and add friction
        v_y = -0.75*v_y; // friction = 0.75
    }

    left -= v_x;
    top += v_y;
    $card_div.offset({top: top, left: left});
    if (left > -80) {
        // only continue animation if card is still visible
        setTimeout(function() {
            var cd = $card_div;
            this_ui.card_animation(cd, v_x, v_y, this_ui);
        }, 20);
    }
};

UI.prototype.setup_secret = function() {
    var this_ui = this;
    $('#secret').click(function() {
        this_ui.win_animation();
    });
};

/**
 * Show the win dialog box
 */
UI.prototype.win = function() {
    $('#windialog').dialog({
        title: 'Freecell',
        modal: true,
        show: 'blind',
        autoOpen: false,
        zIndex: 5000
    });
};

/**
 * The help dialog
 */
UI.prototype.help = function() {
    $('#helptext').dialog({
        title: 'Help',
        modal: true,
        show: 'blind',
        autoOpen: false,
        zIndex: 5000,
        minWidth: 550
    });

    $('#help').click(function() {
        $('#helptext').dialog('open');
    });

};

UI.prototype.new_game = function() {
    var this_ui = this;
    $('#newgame').click(function() {
        this_ui.game.reset();
        this_ui.remove_cards();
        this_ui.add_cards();
        this_ui.create_draggables();

    });
};

/******************************************************************************/

var my_ui;
$(document).ready(function() {
    //var g, my_ui;
    var g;

    g = new Game();
    my_ui = new UI(g);
    my_ui.init();
});
