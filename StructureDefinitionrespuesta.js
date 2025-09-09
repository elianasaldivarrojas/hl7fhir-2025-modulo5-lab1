{
    "resourceType": "StructureDefinition",
    "id": "809678",
    "meta": {
        "versionId": "1",
        "lastUpdated": "2025-09-09T22:02:45.943+00:00",
        "source": "#p7kQB4lZ8uI0vegJ"
    },
    "url": "https://example.org/fhir/StructureDefinition/MedicationRequestMod5",
    "name": "MedicationRequestMod5",
    "status": "draft",
    "fhirVersion": "5.0.0",
    "kind": "resource",
    "abstract": false,
    "type": "MedicationRequest",
    "baseDefinition": "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
    "derivation": "constraint",
    "differential": {
        "element": [
            {
                "id": "MedicationRequest.medication.concept",
                "path": "MedicationRequest.medication.concept",
                "binding": {
                    "strength": "required",
                    "valueSet": "http://example.com/fhir/ValueSet/medicamentosElianaSaldivar"
                }
            },
            {
                "id": "MedicationRequest.subject.reference",
                "path": "MedicationRequest.subject.reference",
                "binding": {
                    "strength": "extensible",
                    "description": "NiveldeUrgencia",
                    "valueSet": "https://example.org/fhir/StructureDefinition/NiveldeUrgencia"
                }
            },
            {
                "id": "MedicationRequest.requester",
                "path": "MedicationRequest.requester",
                "min": 1
            }
        ]
    }
}