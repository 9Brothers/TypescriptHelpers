import * as $ from "jquery";

export abstract class HelperImage {

  public static Resize(maxWidth: number = 1000, maxHeight: number = 1000, file: File, format: string = "jpg"): JQueryDeferred<string> {

    let deferred: JQueryDeferred<string> = $.Deferred();

    let reader = new FileReader();
    reader.onload = (e) => {
      let img = document.createElement("img");

      img.src = e.target.result;

      img.onload = () => {
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
      };
    }

    reader.readAsDataURL(file);

    return deferred;
  }
}