import { Injectable, ChangeDetectorRef } from '@angular/core';





















    public loadTableData(cd: ChangeDetectorRef){



            cd.markForCheck();
            this.comparisonDataService.loadData(this.tableDataSet, cd);



    public loadCriteria(cd: ChangeDetectorRef){       



            cd.markForCheck();



    public loadComparison(cd: ChangeDetectorRef){




            cd.markForCheck();



    public loadDescription(cd: ChangeDetectorRef){



            cd.markForCheck();





















