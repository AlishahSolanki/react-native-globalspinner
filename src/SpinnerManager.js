/**
 * Non-public global class to handle the "default" Spinner instance to global use
 */
class SpinnerManager {
    _defaultSpinner = null;
    register(_ref) {
        if (!this._defaultSpinner && "_id" in _ref) {
            this._defaultSpinner = _ref;
        }
    }
    unregister(_ref) {
        if (!!this._defaultSpinner && this._defaultSpinner._id === _ref._id) {
            this._defaultSpinner = null;
        }
    }
    getDefault() {
        return this._defaultSpinner;
    }
}

export default new SpinnerManager();
