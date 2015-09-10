(function (module) {

    var humanDateRange = function () {
        
        this.$get = function () {

            var options = [{ name: "Custom", id: 1 }, { name: "Today", id: 2 }, { name: "Yesterday", id: 3 }, { name: "This Week (Sun - Today)", id: 4 }, { name: "This Week (Mon - Today)", id: 5 }, { name: "Last 7 Days", id: 6 }, { name: "Last Week (Mon - Sunday)", id: 7 }, { name: "Last Business Week (Mon - Fri)", id: 8 }, { name: "Last 14 days", id: 9 }, { name: "This Month", id: 10 }, { name: "Last 30 Days", id: 11 }, { name: "Last Month", id: 12 }, { name: "Last 90 Days", id: 13 }];
            var selectedOption = 2;

            function setSelectedOption (optionId) {
                selectedOption = optionId;
            };

            function getOptions() {
                return options;
            };

            function getFromDate() {

                //Today
                if (selectedOption == 2) {
                    return new Date();
                }

                //Yesterday
                if (selectedOption == 3) {
                    return moment().subtract(1, 'd').toDate();
                }

                //This Week (Sun - Today)
                if (selectedOption == 4) {
                    return moment().day("Sunday").toDate();
                }

                //This Week (Mon - Today)
                if (selectedOption == 5) {
                    return moment().day("Monday").toDate();
                }

                //Last 7 Days
                if (selectedOption == 6) {
                    return moment().subtract(7, 'd').toDate();
                }

                //Last Week (Mon - Sunday)
                if (selectedOption == 7) {
                    return moment().day(-1).toDate();
                }

                //Last Business Week (Mon - Fri)
                if (selectedOption == 8) {
                    return moment().day(-1).toDate();
                }

                //Last 14 days
                if (selectedOption == 9) {
                    return moment().subtract(14, 'd').toDate();
                }

                //This Month
                if (selectedOption == 10) {
                    return moment().startOf('month').toDate();
                }

                //Last 30 Days
                if (selectedOption == 11) {
                    return moment().subtract(30, 'd').toDate();
                }
                //Last Month
                if (selectedOption == 12) {
                    return moment().startOf('month').subtract(1,'M').toDate()
                }
                //Last 90 Days
                if (selectedOption == 13) {
                    return moment().subtract(30, 'd').toDate();
                }
            }

            function getToDate() {

                //Today
                if (selectedOption == 2) {
                    return new Date();
                }

                //Yesterday
                if (selectedOption == 3) {
                    return moment().subtract(1, 'd').toDate();
                }

                //This Week (Sun - Today)
                if (selectedOption == 4) {
                    return new Date();
                }

                //This Week (Mon - Today)
                if (selectedOption == 5) {
                    return new Date();
                }

                //Last 7 Days
                if (selectedOption == 6) {
                    return new Date();
                }

                //Last Week (Mon - Sunday)
                if (selectedOption == 7) {
                    return moment().day(-7).toDate();
                }

                //Last Business Week (Mon - Fri)
                if (selectedOption == 8) {
                    return moment().day(-5).toDate();
                }

                //Last 14 days
                if (selectedOption == 9) {
                    return new Date();
                }

                //This Month
                if (selectedOption == 10) {
                    return moment().endOf('month').toDate();
                }

                //Last 30 Days
                if (selectedOption == 11) {
                    return new Date();
                }
                //Last Month
                if (selectedOption == 12) {
                    return moment().endOf('month').subtract(1, 'M').toDate();
                }
                //Last 90 Days
                if (selectedOption == 13) {
                    return new Date();
                }
            }

            return {
                getFromDate: getFromDate,
                getToDate: getToDate,
                setSelectedOption: setSelectedOption,
                getOptions: getOptions
            };
        };
    }

    module.config(function ($provide) {
        $provide.provider("humanDateRange", humanDateRange);
    });

}(angular.module("common")));