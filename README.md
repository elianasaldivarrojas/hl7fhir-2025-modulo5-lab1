
# 🧪 Laboratorio: Creación de un Perfil FHIR para MedicationRequest

 
🎯 Objetivo

Crear un perfil basado en el recurso MedicationRequest, que garantice el uso del catálogo local de medicamentos (ValueSet farmacosLocales), defina elementos obligatorios y agregue una extensión personalizada.

🏥 Contexto

El hospital regional quiere estandarizar las prescripciones médicas.
Cada receta debe cumplir con estas reglas:

Medicamento: debe provenir del catálogo oficial (farmacosLocales).

Paciente: siempre requerido.

Fecha de prescripción: obligatoria.

Solicitante (practitioner): requerido.

Nivel de urgencia: extensión opcional.

🔧 Instrucciones
1. Abrir Forge

Inicia Forge y selecciona File → New → Profile.

En el cuadro de diálogo, busca y selecciona el recurso base MedicationRequest.

2. Definir metadatos del perfil

URL del perfil: http://example.org/fhir/StructureDefinition/MedicationRequestHospital

Versión: 1.0.0

Nombre: MedicationRequestHospital

Descripción: Perfil para estandarizar prescripciones en el Hospital Regional.

3. Restringir campos obligatorios

En el árbol de Forge, selecciona MedicationRequest.subject → marcar como 1..1 (obligatorio).

Selecciona MedicationRequest.authoredOn → marcar como 1..1 (obligatorio).

Selecciona MedicationRequest.requester → marcar como 1..1 (obligatorio).

4. Vincular el ValueSet de medicamentos

Ir a MedicationRequest.medication[x] → Binding.

Seleccionar el ValueSet: http://example.org/fhir/ValueSet/farmacosLocales.

Fijar la binding strength como required.

5. Crear la extensión “nivel de urgencia”

En Extensions, agregar una nueva extensión:

URL: http://example.org/fhir/StructureDefinition/nivelUrgencia

Tipo de dato: code

ValueSet sugerido: { normal, prioritario, emergencia }.

6. Guardar el perfil

Exporta el perfil a formato JSON:
MedicationRequestHospital.profile.json

💻 Validación práctica

Abre Postman.

Haz un POST contra el servidor FHIR con el nuevo StructureDefinition.

POST [baseURL]/StructureDefinition
Body: (contenido del perfil JSON)


Verifica que el servidor registre correctamente el perfil.

✅ Resultados esperados

El perfil se carga correctamente en el servidor FHIR.

Al crear una nueva instancia de MedicationRequest, el servidor validará:

Que el medicamento provenga del catálogo (farmacosLocales).

Que el paciente, la fecha y el solicitante estén siempre presentes.

Que opcionalmente pueda incluir el nivel de urgencia mediante la extensión.

