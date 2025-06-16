//sử dụng middleware này để xử lý cho việc mỗi cách sắp xếp thì cho ra 1 icon khác nhau

module.exports = function sortMiddleware (req, res, next)  {
    res.locals._sort = {
        enabled: false,
        type: 'default',
    }

    if ('_sort' in req.query) {
        res.locals._sort.enabled = true;
        res.locals._sort.column = req.query.column || 'default';
        res.locals._sort.type = req.query.type || 'default';
    }
    next()
}