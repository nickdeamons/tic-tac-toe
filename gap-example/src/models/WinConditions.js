const WinConditions =  [
    [true, true, true, false, false, false, false, false, false],
    [true, false, false, true, false, false, true, false, false],
    [true, false, false, false, true, false, false, false, true],
    [false, true, false, false, true, false, true, false, false],
    [false, false, true, false, true, false, true, false, false], 
    [false, false, false, true, true, true, false, false, false],
    [false, false, false, false, false, false, true, true, true],
    [false, false, true, false, false, true, false, false, true]
];

export default WinConditions;