(() => {
  document.querySelectorAll('.inquiry-form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const area = String(data.get('area') || '');
      const company = String(data.get('company') || '');
      const subject = '[Website Inquiry] ' + area + ' / ' + company;
      const body = [
        'Name: ' + String(data.get('name') || ''),
        'Company: ' + company,
        'Business email: ' + String(data.get('email') || ''),
        'Role: ' + String(data.get('role') || '-'),
        'Area of interest: ' + area,
        'Desired timing: ' + String(data.get('timing') || '-'),
        '',
        String(data.get('context') || '-'),
      ].join('\n');
      window.location.href = 'mailto:rAI@rai-sw.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  });

  document.querySelectorAll('.mobile-nav a').forEach((link) => {
    link.addEventListener('click', () => link.closest('details')?.removeAttribute('open'));
  });
})();
