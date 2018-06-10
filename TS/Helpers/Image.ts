import * as $ from "jquery";

namespace TS.Helpers {
  export abstract class Image {

    public Resize(maxWidth: number = 1000, maxHeight: number = 1000, format: string = "jpg"): JQueryDeferred<string> {

      let reader = new FileReader();

      let deferred: JQueryDeferred<string> = $.Deferred();

      reader.onload = (e) => {
        let img = document.createElement("img");

        img.src = e.target.result;

        let canvas = document.createElement("canvas");

        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        let width = img.width;
        let height = img.height;

        if (width > height) {

          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }

        } else {

          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        try {
          ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);  

          let dataUrl = canvas.toDataURL(`image/${format}`);

          deferred.resolve(dataUrl)
        } catch (error) {
          
          deferred.reject(error);
        }
      }

      return deferred;
    }
  }
}