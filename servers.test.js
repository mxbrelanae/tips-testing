describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    serverNameInput.value = 'Bonnie'
  });
  
  it('should update #servertable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let currentList = document.querySelectorAll('#serverTable tbody tr td');

    expect(currentList.length).toEqual(2);
    expect(currentList[0].innerText).toEqual('Bonnie');
    expect(currentList[1].innerText).toEqual('$0.00');
  });

  it('should add a new server name to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Bonnie');
  });

  it('should not add a new server name on submitServerInfo() with no input', function () {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
