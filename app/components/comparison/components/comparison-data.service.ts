import { Injectable, ChangeDetectorRef } from '@angular/core';









    private tags: {[name: string]: string;} = { };






    public loadData(tableDataSet: TableDataSet, cd: ChangeDetectorRef){





                let regArray = /^((?:(?:\w+\s*)(?:-?\s*\w+.)*)+)\s*-?\s*((?:(?:http|ftp|https)(?::\/\/)(?:[\w_-]+(?:(?:\.[\w_-]+)+))|(?:www.))(?:[\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?)$/gi.exec(data.tag);

                if (/^(www)/.test(data.url)) data.url = "http://" + data.url;














                            this.tags[key] = key;



















            cd.markForCheck();



    public getDefaultAttachmentTags(): Array<string>{
        let tags: Array<string> = new Array<string>();
        for(let key in this.tags){
            if (!this.tags.hasOwnProperty(key) || key == "tag" || key == "url" || key == "descr" ) continue;
            tags.push(this.tags[key]);
        }
        return tags;
    }

