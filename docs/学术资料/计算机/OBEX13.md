<!--- file: docs/学术资料/计算机/OBEX13.md --->
{% with pdf_file = "学术资料/计算机/OBEX13.pdf" %}

{% set solid_filepdf = '<i class="fas fa-file-pdf"></i>' %}
{% set empty_filepdf = '<i class="far fa-file-pdf"></i>' %}

<object data="{{ pdf_file }}" type="application/pdf">
    <embed width="100%" style="height: 100vh;" src="{{ pdf_file }}" type="application/pdf" />
</object>

{% endwith %}