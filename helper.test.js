describe("Utilities test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 75;
      tipAmtInput.value = 15;
      submitPaymentInfo();
    });
  
    it('should add up the total bill amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(1000);
  
      billAmtInput.value = 1000;
      tipAmtInput.value =100;
  
      submitPaymentInfo();
      expect(sumPaymentTotal('billAmt')).toEqual(1000);
    });
    
    it('should add up the total tip amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(13);
  
      billAmtInput.value = 65;
      tipAmtInput.value = 13;
  
      submitPaymentInfo();
      expect(sumPaymentTotal('tipAmt')).toEqual(13);
    });
  
    it('should add up the total tip percent on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(20);
  
      billAmtInput.value = 85;
      tipAmtInput.value = 17;
  
      submitPaymentInfo();
      expect(sumPaymentTotal('tipPercent')).toEqual(20);
    });
  
    it('should find tip percent of a single tip on calculateTipPercent()', function () {
      expect(calculateTipPercent(100, 50)).toEqual(50);
      expect(calculateTipPercent(90, 10)).toEqual(9);
    });
  
    it('should make new td and append to tr on appendTd(tr, value)', function () {
      let newTr = document.createElement('tr');
      appendTd(newTr, 'new');
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('new');
    });
  
    it('should delete td and append to tr on appendDeleteBtn(tr, type)', function () {
      let newTr = document.createElement('tr');
      appendDeleteBtn(newTr);
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('X');
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