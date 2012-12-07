StartTest(function(t) {
    var nameValue = '鬼瓦　権三',
        emailValue = 'gonzo@onigawara.com',
        ageValue = '40';
        
    t.requireOk(
        [
            'EX.model.Employee', 
            'EX.model.Department', 
            'EX.store.Departments', 
            'EX.view.Form'
        ], 
        function() {
            var rec, form,
                nameFld, deptFld, emailFld, genderFld, ageFld, 
                saveButton, async = t.beginAsync();

            Ext.create('EX.store.Departments', {
                storeId: 'Departments',
                addMode: false
            });

            form = Ext.create('EX.view.Form', {
                width: 500,
                renderTo: Ext.getBody()
            });

            // フィールドを取得
            nameFld = form.down('textfield[name=name]');
            deptFld = form.down('combobox[name=department_id]');
            emailFld = form.down('textfield[name=email]');
            genderFld = form.down('combobox[name=gender]');
            ageFld = form.down('numberfield[name=age]');
            saveButton = form.down('button[text=保存]');

            // イベントリスナー設定
            form.on('saveCommand', function(form, rec, mode) {
                var values = form.getValues();

                t.pass('保存ボタンがクリックされた');
                t.is(values.name, nameValue, 'nameフィールドの一致');
                t.is(values.email, emailValue, 'emailフィールドの一致');
                t.is(values.department_id, '3', 'department_idフィールドの一致');
                t.is(values.gender, '男', 'genderフィールドの一致');
                t.is(values.age, ageValue, 'ageフィールドの一致');
                t.endAsync(async);
            });

            // フィールドに入力してボタンをクリック
            t.chain({
                // テキストフィールドに入力
                action: 'type',
                target: nameFld,
                text: nameValue
            }, {
                // コンボのリストを開く
                action      : 'click',
                target      : deptFld.el.query('.x-trigger-cell')[0]
            }, 
            function (next) {
                // コンボのアイテムを選択
                t.click(deptFld.getPicker().getNode(2), next);
            }, {
                // テキストフィールドに入力
                action: 'type',
                target: emailFld,
                text: emailValue
            }, {
                // コンボのリストを開く
                action      : 'click',
                target      : genderFld.el.query('.x-trigger-cell')[0]
            },
            function (next) {
                // コンボのアイテムを選択
                t.click(genderFld.getPicker().getNode(0), next);
            }, {
                // 数値フィールドに入力
                action: 'type',
                target: ageFld,
                text: ageValue
            }, {
                // 保存ボタンをクリック
                action: 'click',
                target: saveButton
            });
        }
    );
});

