$(document).ready(function () {
  $("form#triangle").submit(function (event) {
    event.preventDefault();
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());

    $("#error").addClass("hidden");
    $("#triangle-type").addClass("hidden");

    if (!side1 || !side2 || !side3) {
      $("#error").removeClass("hidden");
      $("#error").text("Please enter 3 sides.");
    } else {
      const isTriangle = triangle(side1, side2, side3);
      if (isTriangle) {
        if (side1 === side2 && side2 === side3) {
          $("#triangle-type").removeClass("hidden");
          $("#shape").text("Equilateral");
        } else if (side1 === side2 || side2 === side3 || side1 === side3) {
          $("#triangle-type").removeClass("hidden");
          $("#shape").text("Isosceles");
        } else {
          $("#triangle-type").removeClass("hidden");
          $("#shape").text("Scalene");
        }
      } else {
        $("#error").removeClass("hidden");
        $("#error").text("It is not a triangle");
      }
    }
  });
});

function triangle(side1, side2, side3) {
  return !(
    side1 + side2 < side3 ||
    side2 + side3 < side1 ||
    side1 + side3 < side2
  );
}
