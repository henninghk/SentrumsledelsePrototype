   function editSortOrder(companyId, goUp) {
        const company = model.companies.find(c => c.id == companyId);
        const currentSortOrder = company.sortOrder;
        const newSortOrder = company.sortOrder + (goUp ? -1 : 1);
        const companyToSwapSortOrderWith = model.companies.find(c => c.sortOrder == newSortOrder);
        if (companyToSwapSortOrderWith == null) return;
        companyToSwapSortOrderWith.sortOrder = company.sortOrder;
        company.sortOrder = newSortOrder;
        // update view
    }

    function calcAverage(weeks, entries) {
        let sum = 0;
        if (entries.length > 0) {
            for (let i = 0; i < weeks && i < entries.length; i++) {
                sum += parseInt(entries[i].percent);
            }
            return (sum / entries.length).toFixed(2);
        } else {
            return "unkown";
        }

};

function sorting(sortKey) {
    model.companies.sort((a, b) => {
        return b[sortKey] - a[sortKey];
    })

    console.log(sortKey);
    loadCompanies();
    console.log(model.companies);
}