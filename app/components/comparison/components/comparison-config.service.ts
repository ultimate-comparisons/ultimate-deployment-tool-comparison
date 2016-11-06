import { Injectable, ChangeDetectorRef } from '@angular/core';





import { ComparisonService } from './comparison.service';






    public description: string;




            private comparisonDataService: ComparisonDataService,
            private comparisonService: ComparisonService


    public loadTableData(cd: ChangeDetectorRef){



            cd.markForCheck();
            this.comparisonDataService.loadData(this.tableDataSet, cd);



    public loadCriteria(cd: ChangeDetectorRef){       



            cd.markForCheck();



    public loadComparison(cd: ChangeDetectorRef){




            cd.markForCheck();


    
    public loadDescription(cd: ChangeDetectorRef){
        this.http.request('comparison-configuration/description.md')
        .subscribe(res => {
            this.description = this.comparisonService.converter.makeHtml(res.text());
            cd.markForCheck();
        });
    }
    
    public getBodyAttachmentTags(): Array<string> {
        if (!this.comparison) return new Array<string>();
        let tags: Array<string> = this.comparison.details.bodyAttachmentTags;
        if (tags.length == 0) tags = this.comparisonDataService.getDefaultAttachmentTags();
        return tags;
    }
    
    public displayAllName: string = "All";
    public displayAll: boolean;
    public displayAllChange(toggle:boolean){
        if(this.tableDataSet){
            this.tableDataSet.getTableDataArray().forEach((item) => {
                item.display = toggle;
            });
            this.displayAllName = toggle? "None" : "All";
        }
    }

