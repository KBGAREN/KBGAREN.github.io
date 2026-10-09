(function () {
  var filters = Array.prototype.slice.call(document.querySelectorAll("[data-til-filter]"));
  var cards = Array.prototype.slice.call(document.querySelectorAll("[data-til-card]"));
  var search = document.getElementById("til-search");
  var empty = document.getElementById("til-no-results");
  var activeCategory = "all";

  function updateCards() {
    var query = search ? search.value.trim().toLocaleLowerCase() : "";
    var visible = 0;
    cards.forEach(function (card) {
      var matchesCategory = activeCategory === "all" || card.dataset.tilCategory === activeCategory;
      var matchesQuery = !query || (card.dataset.tilSearch || "").toLocaleLowerCase().indexOf(query) !== -1;
      card.hidden = !(matchesCategory && matchesQuery);
      if (!card.hidden) visible += 1;
    });
    if (empty) empty.hidden = visible > 0;
  }

  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      activeCategory = button.dataset.tilFilter;
      filters.forEach(function (item) {
        var active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", active ? "true" : "false");
      });
      updateCards();
    });
  });
  if (search) search.addEventListener("input", updateCards);
})();
