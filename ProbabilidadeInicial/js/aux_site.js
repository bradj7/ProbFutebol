$('.dropdown-menu a[data-toggle="tab"]').click(function (e) {
    e.stopPropagation()        
    $(this).tab('show')
})