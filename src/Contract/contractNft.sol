pragma solidity 0.6.4;

contract StorageContract {
    

    string public dataInput;
    
    event myEventTest(string eventOutput);
    
    function set(string memory myInput) public {
        dataInput = myInput;
        emit myEventTest(myInput);
    }
    
    function get() public view returns (string memory) {
        return dataInput;
    }
    
}