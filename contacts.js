fetch('contacts.json')
  .then(response => response.json())
  .then(data => {
    const input = document.getElementById('searchInput');
    const table = document.getElementById('contactTable');

    function renderTable(filteredData) {
      table.innerHTML = '';
      filteredData.forEach(item => {
        const row = `<tr>
          <td>${item.FullName}</td>
          <td>${item.Department}</td>
          <td>${item.Title}</td>
          <td>${item.Email}</td>
        </tr>`;
        table.innerHTML += row;
      });
    }

    function filterContacts() {
      const keyword = input.value.toLowerCase();
      const result = data.filter(item =>
        item.FullName.toLowerCase().includes(keyword) ||
        item.Department.toLowerCase().includes(keyword) ||
        item.Title.toLowerCase().includes(keyword) ||
        item.Email.toLowerCase().includes(keyword)
      );
      renderTable(result);
    }

    input.addEventListener('input', filterContacts);
    renderTable(data);
  });
