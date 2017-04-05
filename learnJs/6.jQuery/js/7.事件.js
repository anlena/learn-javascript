var
    form = $('#test-form'),
    langs = form.find('[name=lang]'),
    selectAll = form.find('label.selectAll :checkbox'),
    selectAllLabel = form.find('label.selectAll span.selectAll'),
    deselectAllLabel = form.find('label.selectAll span.deselectAll'),
    invertSelect = form.find('a.invertSelect');

// 重置初始化状态:
form.find('*').show().off();
form.find(':checkbox').prop('checked', false).off();
deselectAllLabel.hide();
// 拦截form提交事件:
form.off().submit(function(e) {
    e.preventDefault();
    alert(form.serialize());
});


function updateLabel() {
    var allChecked = langs.filter(':checked').length === langs.length;
    selectAll.prop('checked', allChecked);
    if (allChecked) {
        selectAllLabel.hide()
        deselectAllLabel.show()
    } else {
        selectAllLabel.show()
        deselectAllLabel.hide()
    }
}
selectAll.change(function(e) {
    langs.prop('checked', $(this).is(':checked'));
    updateLabel();
});

invertSelect.click(function(e) {
    langs.click();
});
langs.change(updateLabel);