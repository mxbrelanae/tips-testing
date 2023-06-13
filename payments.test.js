describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function () {
      billInput.value = 75;
      tipInput.value = 15;
    });
  
    it('should add a new server to allServers on submitServerInfo()', function () {
      submitServerInfo();
  
      expect(Object.keys(allServers).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('75');
      expect(allPayments['payment1'].tipAmt).toEqual('15');
      expect(allPayments['payment1'].tipPercent).toEqual(20); 
     });
  
    it('should update the #paymentTable on appendPaymentTable()', function () {
      let currentPayment = createCurPayment();
      allPayments['payment1'] = currentPayment;
  
      appendPaymentTable(currentPayment);
  
      let currentList = document.querySelectorAll('#paymentTable tbody tr td');
  
      expect(currentList.length).toEqual(4);
      expect(currentList[0].innerText).toEqual('$75');
      expect(currentList[1].innerText).toEqual('$15');
      expect(currentList[2].innerText).toEqual('%20');
      expect(currentList[3].innerText).toEqual('');
    });
    
    it('should not add a new payment on submitPaymentInfo() when input is empty or 0', function () {
      billAmtInput.value = '';
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(0);
    });
  
    it('should create a new payment on createCurPayment()', function () {
      let expPayment = {
        billAmt: '75',
        tipAmt: '15',
        tipPercent: 20,
      }
  
      expect(createCurPayment()).toEqual(expPayment);
    });
  
    it('should not create payment that is empty on createCurPayment()', function () {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      let currentPayment = createCurPayment();
      expect(currentPayment).toEqual(0);
    });
  
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
      
    });
  });
  