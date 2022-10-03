/* eslint-disable default-case */
window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';
    /*
        Indexes within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */
    const winningConditions = [
        // eslint-disable-next-line no-magic-numbers
        [0, 1, 2],
        // eslint-disable-next-line no-magic-numbers
        [3, 4, 5],
        // eslint-disable-next-line no-magic-numbers
        [6, 7, 8],
        // eslint-disable-next-line no-magic-numbers
        [0, 3, 6],
        // eslint-disable-next-line no-magic-numbers
        [1, 4, 7],
        // eslint-disable-next-line no-magic-numbers
        [2, 5, 8],
        // eslint-disable-next-line no-magic-numbers
        [0, 4, 8],
        // eslint-disable-next-line no-magic-numbers
        [2, 4, 6]
    ];

    function handleResultValidation() {
        let roundWon = false;
        // eslint-disable-next-line no-magic-numbers
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            // eslint-disable-next-line no-magic-numbers
            const c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

    if (roundWon) {
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

    if (!board.includes('')) {
announce(TIE);
}
    }

    function announce(type) {
        switch (type) {
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case TIE:
                announcer.innerText = 'Tie';
        }
        announcer.classList.remove('hide');
    }

    const isValidAction = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }

        return true;
    };

    function updateBoard(index) {
        board[index] = currentPlayer;
    }

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }
    function userAction(tile, index) {
        if (isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }
    function resetBoard() {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }

    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    resetButton.addEventListener('click', resetBoard);
});